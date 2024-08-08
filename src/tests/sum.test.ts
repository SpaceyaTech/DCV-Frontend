const sum = (a: number, b: number) => a + b;

import { expect, test } from "vitest";

test("adds 2+3 to equal 5", () => expect(sum(2, 3)).toBe(5));
