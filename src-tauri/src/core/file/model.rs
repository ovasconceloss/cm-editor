use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct DatabaseFile {
  name: String,
  edition: i32,
}

impl DatabaseFile {
  pub fn new(name: String, edition: i32) -> Self {
    Self {
      name: name,
      edition: edition,
    }
  }
}