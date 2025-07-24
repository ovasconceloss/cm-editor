use tauri::State;
use crate::state::SharedDatabase;
use std::{fs::{self, File}, path::PathBuf};

pub fn new(name: String) -> Result<String, ()> {
  
  let home_dirs = dirs::home_dir().unwrap();
  let _ = fs::create_dir_all(PathBuf::from(home_dirs.clone().join("CM2026 Edition")));

  let file_name: String = format!("{}.db", name);
  let file_path = PathBuf::from(home_dirs.clone()).join("CM2026 Edition").join(&file_name);

  let _file = File::create(&file_path).unwrap();

  Ok(file_name)
}

pub fn set(database_path: String, state: State<'_, SharedDatabase>) {
  let mut database = state.lock().unwrap();
  database.database_path = database_path;
}

pub fn get_current(state: State<'_, SharedDatabase>) -> String {
  let application_state = state.lock().unwrap();
  application_state.database_path.clone()
}