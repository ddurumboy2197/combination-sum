function combinationSum(candidates, target) {
    let result = [];
    function backtrack(remain, comb, start) {
        if (remain === 0) {
            result.push([...comb]);
            return;
        } else if (remain < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i);
            comb.pop();
        }
    }
    backtrack(target, [], 0);
    return result;
}

let candidates = [2, 3, 5];
let target = 8;
console.log(combinationSum(candidates, target));
```

Kodni ishlatish uchun quyidagilarni amalga oshiring:

1. Kodni yozib, `candidates` va `target` ni kiritib, `console.log` ni bosing.
2. Natijani ko'ring.
