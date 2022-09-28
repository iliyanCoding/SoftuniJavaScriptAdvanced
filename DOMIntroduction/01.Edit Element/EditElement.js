function editElement(ref, match, replacer) {
    let text = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let edited = text.replace(matcher, replacer);
    ref.textContent = edited;
}