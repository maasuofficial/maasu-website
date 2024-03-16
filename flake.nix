{
  description = "dev flake";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    node_nixpkgs.url = "github:nixos/nixpkgs/46688f8eb5cd6f1298d873d4d2b9cf245e09e88e"; # v18.17.1
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
          prettierd
        ];
        shellHook = ''
          set -o vi
        '';
      };
    });
}
