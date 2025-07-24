use tauri::State;
use crate::{state::SharedDatabase, use_cases::file::file::{get_current, new, set}};

#[tauri::command]
pub fn new_file(name: String) -> String {
  let _ = new(name.clone());

  match new(name) {
    Ok(database) => database,
    Err(_) => format!("Error")
  }
}

#[tauri::command]
pub fn set_file(database_path: String, state: State<'_, SharedDatabase>) {
  set(database_path, state);
}

#[tauri::command]
pub fn get_current_file(state: State<'_, SharedDatabase>) -> String {
  get_current(state)
}