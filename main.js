import { from, concat, delay, tap } from 'rxjs';

console.log("--- Concat Operator Demo ---");

// Obs A: Loading data (must finish first)
const loading$ = from(['Loading...']).pipe(
  delay(300),
  tap(v => console.log(`(Source A Emitted: ${v})`))
);


// Obs B: Final data
const data$ = from(['Data Ready', 'Processing Done']).pipe(
  tap(v => console.log(`(Source B Emitted: ${v})`))
);

concat(loading$, data$).subscribe({
  next: result => console.log(`[Result] Sequential: ${result}`),
  complete: () => console.log('Concat Stream Completed.')
});
