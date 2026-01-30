export function symfonyCreateAllCrudEntitiesCommandPhpTemplate(): string {
  const returnLine = "\n";
  return `<?php

namespace App\\Command;

use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Component\\Console\\Attribute\\AsCommand;
use Symfony\\Component\\Console\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Input\\InputOption;
use Symfony\\Component\\Console\\Output\\OutputInterface;
use Symfony\\Component\\Console\\Style\\SymfonyStyle;
use Symfony\\Component\\Console\\Question\\ChoiceQuestion;
use Symfony\\Component\\Process\\Process;

#[AsCommand(
    name: 'crud-all',
    description: 'Genere un CRUD pour chaque entite',
)]
class CreateAllCrudEntitiesCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $em,
        private string $projectDir,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('all', 'a', InputOption::VALUE_NONE, 'Generer pour toutes les entites sans demander')
            ->addOption('script', 's', InputOption::VALUE_NONE, 'Generer un script shell au lieu d\\'executer')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $helper = $this->getHelper('question');

        $entities = $this->listEntities();

        if (empty($entities)) {
            $io->warning('Aucune entite trouvee.');
            return Command::SUCCESS;
        }

        $io->title('Generation des CRUD pour les entites');
        $io->note(sprintf('%d entite(s) trouvee(s)', count($entities)));

        // Option: générer un script
        if ($input->getOption('script')) {
            return $this->generateScript($entities, $io);
        }

        // Option: tout générer automatiquement
        if ($input->getOption('all')) {
            $selectedEntities = $entities;
            $io->info('Mode automatique: toutes les entites seront traitees');
        } else {
            // Mode interactif: sélection des entités
            $selectedEntities = $this->selectEntities($entities, $input, $output, $io, $helper);

            if (empty($selectedEntities)) {
                $io->info('Aucune entite selectionnee.');
                return Command::SUCCESS;
            }
        }

        $io->newLine();
        $io->section('Entites selectionnees:');
        $io->listing($selectedEntities);

        // Confirmation finale
        if (!$io->confirm('Voulez-vous generer les CRUD pour ces entites ?', true)) {
            $io->info('Operation annulee.');
            return Command::SUCCESS;
        }

        // Génération des CRUDs
        $this->generateCruds($selectedEntities, $input, $output, $io);

        return Command::SUCCESS;
    }

    private function selectEntities(
        array $entities,
        InputInterface $input,
        OutputInterface $output,
        SymfonyStyle $io,
        $helper
    ): array {
        $io->section('Selection des entites');

        // Créer les choix avec un format lisible
        $choices = array_merge(['Toutes les entites'], $entities, ['Aucune (annuler)']);

        $question = new ChoiceQuestion(
            'Selectionnez les entites (separees par des virgules pour plusieurs)',
            $choices,
            '0'
        );
        $question->setMultiselect(true);

        $selected = $helper->ask($input, $output, $question);

        // Gérer les cas spéciaux
        if (in_array('Toutes les entites', $selected)) {
            return $entities;
        }

        if (in_array('Aucune (annuler)', $selected)) {
            return [];
        }

        return array_values(array_intersect($entities, $selected));
    }

    private function generateCruds(
        array $entities,
        InputInterface $input,
        OutputInterface $output,
        SymfonyStyle $io
    ): void {
        $io->newLine();
        $io->section('Generation en cours...');

        $success = 0;
        $failed = 0;

        foreach ($entities as $entity) {
            $io->text('Traitement de: ' . $entity);

            // Utiliser Process pour exécuter make:crud
            $process = new Process([
                'php',
                'bin/console',
                'make:crud',
                $entity
            ], $this->projectDir);

            $process->setTimeout(120);

            // Fournir des entrées par défaut (répondre automatiquement aux questions)
            $process->setInput("\\n\\n"); // Deux "entrée" pour accepter les valeurs par défaut

            try {
                $process->run();

                if ($process->isSuccessful()) {
                    $io->success('✓ ' . $entity);
                    $success++;
                } else {
                    $io->error('✗ ' . $entity);
                    $io->text('  Erreur: ' . $process->getErrorOutput());
                    $failed++;
                }
            } catch (\\Exception $e) {
                $io->error('✗ ' . $entity . ' - Exception: ' . $e->getMessage());
                $failed++;
            }
        }

        // Résumé
        $io->newLine();
        $io->section('Résumé');
        $io->table(
            ['Statut', 'Nombre'],
            [
                ['Succès', $success],
                ['Échecs', $failed],
                ['Total', count($entities)],
            ]
        );

        if ($success > 0) {
            $io->success(sprintf('%d CRUD genere(s) avec succes !', $success));
        }

        if ($failed > 0) {
            $io->warning(sprintf('%d CRUD ont echoue.', $failed));
        }
    }

    private function generateScript(array $entities, SymfonyStyle $io): int
    {
        $io->section('Generation du script');

        // Demander le type de script
        $scriptType = $io->choice(
            'Type de script a generer',
            ['bash' => 'Bash (Linux/Mac)', 'powershell' => 'PowerShell (Windows)'],
            'bash'
        );

        if ($scriptType === 'bash') {
            $this->generateBashScript($entities, $io);
        } else {
            $this->generatePowerShellScript($entities, $io);
        }

        return Command::SUCCESS;
    }

    private function generateBashScript(array $entities, SymfonyStyle $io): void
    {
        $script = "#!/bin/bash\\n\\n";
        $script .= "# Script de generation automatique des CRUD\\n";
        $script .= "# Genere le " . date('Y-m-d H:i:s') . "\\n\\n";

        foreach ($entities as $entity) {
            $script .= "echo \"Generation du CRUD pour $entity...\"\n";
            $script .= "printf \"\\n\\n\" | php bin/console make:crud $entity\n";
            $script .= "echo \"\"\n\n";
        }

        $script .= "echo \\"Generation terminee!\\"\\n";

        $filename = 'generate_all_cruds.sh';
        file_put_contents($filename, $script);
        chmod($filename, 0755);

        $io->success('Script Bash genere: ' . $filename);
        $io->note('Executez: ./' . $filename);
    }

    private function generatePowerShellScript(array $entities, SymfonyStyle $io): void
    {
        $script = "# Script PowerShell de generation automatique des CRUD\\n";
        $script .= "# Genere le " . date('Y-m-d H:i:s') . "\\n\\n";

        foreach ($entities as $entity) {
            $script .= "Write-Host \\"Generation du CRUD pour $entity...\\"\\n";
            $script .= "Write-Host \\"n\\n" | php bin/console make:crud $entity\\n";
            $script .= "Write-Host \\"\\"\\n\\n";
        }

        $script .= "Write-Host \\"Generation terminee!\\"\\n";

        $filename = 'generate_all_cruds.ps1';
        file_put_contents($filename, $script);

        $io->success('Script PowerShell genere: ' . $filename);
        // $io->note('Executez: '.'\\' . $filename);
    }

    public function listEntities(): array
    {
        $meta = $this->em->getMetadataFactory()->getAllMetadata();

        $entities = [];
        foreach ($meta as $m) {
            $fqcn = $m->getName();
            $parts = explode('\\\\', $fqcn);
            $entities[] = end($parts);
        }

        sort($entities);

        return $entities;
    }
}

`;
}
