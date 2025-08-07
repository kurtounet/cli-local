// Template pour un testreact
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getReactTestTemplate(entity: IEntityJson) {
  return `import { render, screen } from '@testing-library/react';
import ${entity.namePascalCase}Component from './${entity.namePascalCase}Component';

describe('${entity.namePascalCase}Component', () => {
  it('renders ${entity.namePascalCase} component', () => {
    render(<${entity.namePascalCase}Component />);
    expect(screen.getByText('${entity.namePascalCase} Component')).toBeInTheDocument();
  });
});
`;
}
