pub mod app;
pub mod core;
pub mod state;
pub mod use_cases;

use std::sync::Mutex;
use crate::{app::commands::{
    file::commands::{
        new_file, 
        set_file, 
        get_current_file
    }, 
    system::commands::exit_app
}, state::DatabaseState};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(Mutex::new(DatabaseState { 
            database_path: String::new() 
        }))
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            new_file,
            set_file,
            exit_app,
            get_current_file,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
