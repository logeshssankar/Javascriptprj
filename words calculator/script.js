function count() {
  let sentence = document.getElementById("input").value;
  let words = sentence.trim();
  let separate = words.split(/\s+/);
  let count = separate.length;

  document.getElementById("result").innerHTML = `${count} - Words`;
  console.log(count);
}
