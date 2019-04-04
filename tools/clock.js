import { performance } from "perf_hooks"

export const time = (action, name = "") => {
  const start = performance.now();
  action();
  const end = performance.now();

  if (name != null && name.trim().length > 0) {
    console.log(name);
  }

  console.log("time:", end - start)
}