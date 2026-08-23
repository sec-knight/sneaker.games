CREATE TABLE IF NOT EXISTS horde_scores (
  id TEXT PRIMARY KEY,
  player_name TEXT NOT NULL CHECK (length(player_name) >= 2 AND length(player_name) <= 16),
  score INTEGER NOT NULL CHECK (score > 0 AND score <= 999999),
  wave_reached INTEGER NOT NULL CHECK (wave_reached >= 1),
  kills INTEGER NOT NULL CHECK (kills >= 0),
  survival_seconds REAL NOT NULL CHECK (survival_seconds >= 0),
  build_id TEXT NOT NULL,
  device_class TEXT NOT NULL CHECK (device_class IN ('phone', 'tablet', 'desktop', 'unknown')),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_horde_scores_rank ON horde_scores(score DESC, created_at ASC);

CREATE TABLE IF NOT EXISTS horde_score_rate_limits (
  visitor_key TEXT PRIMARY KEY,
  window_started INTEGER NOT NULL,
  submission_count INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_horde_score_rate_window ON horde_score_rate_limits(window_started);
