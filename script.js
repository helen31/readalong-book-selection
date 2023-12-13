document.addEventListener('selectionchange', () => {
    console.log('-------------start------------------');
    const selection = document.getSelection();
    const selectedText = selection?.toString();
    console.log('%cSELECTED TEXT:', 'color:red;font-weight:bold;', selectedText);
    console.log('%cANCHOR NODE:', 'color:green;font-weight:bold;', selection?.anchorNode);
    console.log('%cANCHOR NODE NAME:', 'color:green;font-weight:bold;', selection?.anchorNode?.nodeName);
    console.log('%cANCHOR NODE Value:', 'color:green;font-weight:bold;', selection?.anchorNode?.nodeValue?.toString());
    console.log('------------end--------------------');
});
