const argv = process.argv.slice(2);

const N = argv[0];

var maria_wins = 0;
var joao_wins  = 0;

if(N < 1 || N > 10000) return;

for(i = 1; i <= N; i++){
    if(argv[i] === 0) maria_wins++;
    else joao_wins++;
}

console.log(`Mary won ${maria_wins} times and John won ${joao_wins} times`);  