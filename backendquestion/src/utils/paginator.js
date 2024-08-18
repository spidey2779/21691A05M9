exports.paginate = (items, n, page) => {
    const startIndex = (page - 1) * n;
    const endIndex = page * n;
    return items.slice(startIndex, endIndex);
};
