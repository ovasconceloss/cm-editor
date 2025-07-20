use std::{fs::File, path::PathBuf};

pub fn new(name: String) -> Result<PathBuf, ()> {
  let file_name: String = format!("{}.db", name);
  let file_path: PathBuf = PathBuf::from(&file_name);

  let _file = File::create(&file_path).expect("ERROR");

  Ok(file_path)
}