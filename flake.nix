{
  description = "dev flake";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    node_nixpkgs.url = "github:nixos/nixpkgs/a343533bccc62400e8a9560423486a3b6c11a23b"; # v20.11.1
  };

  outputs =
    { self, flake-utils, nixpkgs, node_nixpkgs }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          node_nixpkgs.legacyPackages.${system}.nodejs
          node_nixpkgs.legacyPackages.${system}.nodePackages.yarn
          prettierd
        ];
        shellHook = ''
          set -o vi
        '';
      };
    });
}
