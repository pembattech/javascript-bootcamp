// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


let dolplin_score1 = 10;
let dolplin_score2 = 15;
let dolplin_score3 = 8;

let koalas_score1 = 13;
let koalas_score2 = 14;
let koalas_score3 = 19;

let average_dolphin_score = (dolplin_score1 + dolplin_score2 + dolplin_score3)/3
let average_koalas_score = (koalas_score1 + koalas_score2 + koalas_score3)/3

if (average_dolphin_score > average_dolphin_score) {
    console.log(`The average score of Dolphin is ${average_dolphin_score} higher than ${average_koalas_score}`)
}

else if (average_dolphin_score < average_dolphin_score) {
    console.log(`The average score of Kolas is ${average_koalas_score} higher than ${average_dolphin_score} `)
}

if (average_dolphin_score === average_dolphin_score) {
    console.log(`The average score of Dolphin and Koalas is equal ${average_koalas_score}`)
}
