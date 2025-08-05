export function DEPENDENCIES_SYMFONY_MOCK() {
  return {
    packageManager: "composer",
    prod: ["doctrine/orm", "symfony/framework-bundle"],
    dev: [
      "symfony/maker-bundle",
      "phpunit/phpunit",
      "symfony/http-client",
      "symfony/webpack-encore-bundle",
      "symfony/profiler-pack",
      "doctrine/doctrine-fixtures-bundle",
    ],
  };
}
