export default function log(
  level: "INFO" | "WARN" | "ERROR",
  message?: string,
  data?: Record<string, any>,
) {
  process.stdout.write(
    JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      message,
      ...data,
    }) + "\n",
  );
}
