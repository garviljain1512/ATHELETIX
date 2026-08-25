import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export function PerformanceChart({
  data,
  unit = "",
}: {
  data: { year: string; value: number }[];
  unit?: string;
}) {
  return (
    <div className="surface-card p-5">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-base font-bold tracking-tight">Performance Progress</h3>
          <p className="text-xs text-muted-foreground">Improving trajectory</p>
        </div>
        <span className="text-xs font-semibold text-primary">↑ Latest best</span>
      </div>
      <div className="mt-5 h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="var(--muted-foreground)"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              tickLine={false}
              axisLine={false}
              fontSize={11}
              domain={["auto", "auto"]}
            />
            <Tooltip
              cursor={{ stroke: "var(--primary-dim)" }}
              contentStyle={{
                background: "var(--popover)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                fontSize: 12,
              }}
              labelStyle={{ color: "var(--muted-foreground)" }}
              formatter={(v: number) => [`${v}${unit}`, "Result"]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--primary)"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "var(--primary)", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "var(--primary)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MatchScore({ score }: { score: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-5">
      <div className="relative size-28 shrink-0">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="var(--border)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (c * score) / 100}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="stat-number text-2xl text-primary">{score}%</span>
        </div>
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-[0.28em] text-muted-foreground uppercase">
          Athletix Match
        </p>
        <p className="mt-1 text-sm font-semibold">Why this match?</p>
        <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
          {[
            "Strong performance trajectory",
            "Verified achievements",
            "Relevant competition level",
            "Location match",
          ].map((r2) => (
            <li key={r2} className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              {r2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
