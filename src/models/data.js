let ratings = [
    { ratingId: 1, userId: 101, productId: 1, score: 5, comment: "Xuất sắc", createdAt: new Date() },
    { ratingId: 2, userId: 102, productId: 1, score: 4, comment: "Tốt", createdAt: new Date() },
];

let users = [
    { userId: 101, username: "linh_01" },
    { userId: 102, username: "linh_02" },
];

module.exports = { ratings, users };