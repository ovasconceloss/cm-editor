use std::sync::Mutex;

#[derive(Debug)]
pub struct DatabaseState {
  pub database_path: String
}

pub type SharedDatabase = Mutex<DatabaseState>;