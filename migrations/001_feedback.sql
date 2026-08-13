CREATE TABLE IF NOT EXISTS feedback (
  id TEXT PRIMARY KEY,
  game_slug TEXT NOT NULL,
  build_id TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('fun','needs-work','bug','idea')),
  message TEXT NOT NULL,
  device_class TEXT NOT NULL CHECK (device_class IN ('phone','tablet','desktop','unknown')),
  input_method TEXT NOT NULL CHECK (input_method IN ('touch','keyboard','unknown')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','useful','planned','fixed','dismissed')),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status, created_at DESC);

CREATE TABLE IF NOT EXISTS feedback_rate_limits (
  visitor_key TEXT PRIMARY KEY,
  window_started INTEGER NOT NULL,
  submission_count INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_feedback_rate_window ON feedback_rate_limits(window_started);
