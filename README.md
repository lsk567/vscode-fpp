# fpp

VSCode language support for FPrimePrime modeling language.

## How to

When first loading up your FPrime project, you will notice
many errors! This is because the compiler doesn't know
where to search for FPP declarations

![Screenshot from 2023-06-20 14-14-57](https://github.com/Kronos3/vscode-fpp/assets/15131751/82d0f80b-5885-4fab-808c-cb04c6ef2344)

You will need to load the locs files which is generated during build time
in the cmake build folder. Look for `build/locs.fpp`.

Once the locs file is loaded, the entire project will be indexed and references
will be resolved.

### Features

- Syntax highlighting
- Code completion
  - Syntax level completion
  - Semantic specific identifier lookup
    - When searching for a type, only types will be shown. Same goes for ports, components etc.
- Syntax Signature Display
  - This should pop up while you are typing but can be manually triggered, see [VSCode Docs](https://code.visualstudio.com/docs/typescript/typescript-editing#_signature-help)
  ![Screenshot from 2023-06-20 15-28-08](https://github.com/Kronos3/vscode-fpp/assets/15131751/2826cbc3-80d0-404c-8505-9542ea28d2c2)
  - Includes descriptions on what each field does
- Hover information
  - Shows what references resolved to
- Go-to Reference (`Ctrl-Click`)
- Document Links
  - Used when referencing a file directly in FPP (for example the `instance` `at` specifier).

### Technical Description

This VSCode extension is essentially a FPP compiler frontend
written in TypeScript using ANTLR4. It injests a 'locs' file
generated during the FPrime build process which will tell the
compiler which files to include during its variable/type declaration
stage.

Files are parsed and reduced in a separate worker thread and then
sent through the compilers declaration collection in the main thread.
