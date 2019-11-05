export function sortTreeNodes(arr) {
  const roots = arr.filter(node => node.parent_id === -1) || [];
  const arrWithoutRoots = arr.map(node => node.parent_id !== -1 && node);

  function sortTree(root) {
    let children = arrWithoutRoots.filter(node => node.parent_id === root.id);
    if (children.length !== 0) {
      Object.defineProperty(root, 'children', {
        value: [...children],
        configurable: true,
        enumerable: true,
        writable: true,
      });
      root.children.forEach(sortTree);
    }
  }

  roots.forEach(sortTree);
  return roots;
}
