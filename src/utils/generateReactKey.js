export default (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}