use tauri::State;
use crate::state::SharedDatabase;
use std::{fs::File, path::PathBuf};

pub fn new(name: String) -> Result<PathBuf, ()> {
  let file_name: String = format!("{}.db", name);
  let file_path: PathBuf = PathBuf::from(&file_name);

  let _file = File::create(&file_path).unwrap();

  Ok(file_path)
}

pub fn set(database_path: String, state: State<'_, SharedDatabase>) {
  let mut database = state.lock().unwrap();
  database.database_path = database_path;
}

pub fn get_current(state: State<'_, SharedDatabase>) -> String {
  let application_state = state.lock().unwrap();
  application_state.database_path.clone()
}