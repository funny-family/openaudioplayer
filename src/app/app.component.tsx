import './app.styles.css';
import { open } from '@tauri-apps/plugin-dialog';
import { readDir, readFile, BaseDirectory, stat } from '@tauri-apps/plugin-fs';

export var App = () => {
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          const selectedDirPath = await open({
            multiple: false,
            directory: true,
          });

          if (!selectedDirPath) {
            return;
          }

          const entries = await readDir(selectedDirPath);
          const fileEntries = entries.filter((entry) => {
            return entry.isFile;
          });
          const filePaths = fileEntries.map((entry) => {
            return `${selectedDirPath}/${entry.name}`;
          });

          const vvv = await stat(`${selectedDirPath}/${fileEntries[0].name}`);
          // var zzz = await readFile(`${selectedDirPath}/${fileEntries[0].name}`);
          console.log(vvv);

          console.log({ selectedDirPath, entries, fileEntries, filePaths });
        }}
      >
        open
      </button>
    </div>
  );
};
