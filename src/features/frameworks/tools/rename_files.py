import os
import argparse
import sys

def rename_file(source, destination, force=False):
    """
    Renames a file from a source path to a destination path.

    Args:
        source (str): The path of the file to rename.
        destination (str): The new path for the file.
        force (bool): If True, overwrites the destination file if it exists.
    """
    if not os.path.exists(source):
        print(f"Error: Source file not found at '{source}'", file=sys.stderr)
        return

    if os.path.exists(destination) and not force:
        print(
            f"Error: Destination file '{destination}' already exists. "
            "Use --force to overwrite.",
            file=sys.stderr
        )
        return

    try:
        os.rename(source, destination)
        print(f"Successfully renamed '{source}' to '{destination}'")
    except OSError as e:
        print(f"Error: Could not rename file '{source}'. {e}", file=sys.stderr)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="A command-line tool to rename one or more files.",
        epilog="Example: python rename_files.py old1.txt new1.txt old2.txt new2.txt"
    )
    parser.add_argument(
        "file_pairs",
        nargs='+',
        help="A list of source and destination file paths, provided in pairs. "
             "Example: source1 destination1 source2 destination2 ..."
    )
    parser.add_argument(
        "-f", "--force",
        action="store_true",
        help="Force overwrite if any destination file already exists."
    )

    args = parser.parse_args()

    if len(args.file_pairs) % 2 != 0:
        print("Error: An even number of file paths (source and destination pairs) is required.", file=sys.stderr)
        sys.exit(1)

    # Process files in pairs
    for i in range(0, len(args.file_pairs), 2):
        source = args.file_pairs[i]
        destination = args.file_pairs[i+1]
        rename_file(source, destination, args.force)
