const readURL = (input, id) => {
  if (input.files && input.files[0]) {
    const render = new FileReader();
    render.onload = (e) => {
      $('#'.concat(id))
      .attr('src', e.target.result)
      .width(150)
      .height(200);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

export default readURL;
