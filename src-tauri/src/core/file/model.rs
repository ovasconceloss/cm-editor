use chrono::{DateTime, Utc};

#[derive(Debug)]
pub struct File {
  name: String,
  edition: i32,
  created_at: DateTime<Utc>,
}

impl File {
  pub fn new(name: String, edition: i32) -> Self {
    Self {
      name: name,
      edition: edition,
      created_at: Utc::now()
    }
  }
}