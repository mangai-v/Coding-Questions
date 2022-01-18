// program to generate range of numbers and characters
function* gen(a, b) {
  for (let i = a; i <= b; i += 1) {
    yield i;
  }
}

function range(a, b) {
  if (typeof a === "string") {
    let result = [...gen(a.charCodeAt(), b.charCodeAt())].map(n =>
      String.fromCharCode(n)
    );
    console.log(result);
  } else {
    let result = [...gen(a, b)];
    console.log(result);
  }
}

range(1, 5);
range("A", "G");
