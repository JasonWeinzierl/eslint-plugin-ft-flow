import { Rule, Linter } from 'eslint';

declare const plugin: {
    meta: {
        name: string,
        version: string,
        namespace: 'ft-flow',
    },
    rules: Record<string, Rule.RuleModule>,
};

declare const ftFlow: typeof plugin & {
    configs: {
        recommended: {
            parser: 'hermes-eslint',
            plugins: ['ft-flow'],
            settings: {
                'ft-flow': {
                    onlyFilesWithFlowAnnotation: boolean,
                },
            },
            rules: Record<string, Linter.RuleSeverity>,
        },
        'babel-parser': {
            parser: '@babel/eslint-parser',
            plugins: ['ft-flow'],
            settings: {
                'ft-flow': {
                    onlyFilesWithFlowAnnotation: boolean,
                },
            },
            rules: Record<string, Linter.RuleSeverity>,
        },
    },
    flatConfigs: {
        recommended: {
            name: 'ft-flow/recommended',
            plugins: {
                'ft-flow': typeof plugin,
            },
            languageOptions: {
                parser: Linter.Parser,
            },
            settings: {
                'ft-flow': {
                    onlyFilesWithFlowAnnotation: boolean,
                },
            },
            rules: Record<string, Linter.RuleSeverity>,
        },
        custom: <TParser extends Linter.Parser>(options: { parser: TParser }) => {
            name: 'ft-flow/custom-recommended',
            plugins: {
                'ft-flow': typeof plugin,
            },
            languageOptions: {
                parser: TParser,
            },
            settings: {
                'ft-flow': {
                    onlyFilesWithFlowAnnotation: boolean,
                },
            },
            rules: Record<string, Linter.RuleSeverity>,
        },
    },
};

export { ftFlow as default };
