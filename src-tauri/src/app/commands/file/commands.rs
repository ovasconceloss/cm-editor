use crate::use_cases::file::file::new;

#[tauri::command]
pub fn new_file(name: String) {
  let _ = new(name);
}