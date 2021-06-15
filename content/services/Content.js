module.exports = class ContentService {
  constructor(Content) {
    this.Content = Content;
  }

  async getAll() {
    const contents = await this.Content.findAll();
    console.log(contents);
    return contents;
  }

  async detail(id) {
    const content = await this.Content.findOne({ where: { id } });
    return content;
  }

  async create(params, file) {
    const content = await this.Content.create({
      title: params.title,
      description: params.description,
      image: file === undefined ? '' : file.filename,
    });
    return {
      title: content.title,
      description: content.description,
      image: content.image,
    };
  }

  async update(params, file) {
    await this.Content.update(
      {
        title: params.title,
        description: params.description,
        image: file === undefined ? '' : file.filename,
      },
      { where: { id: params.id } },
    );

    const content = await this.Content.findOne({ where: { id: params.id } });

    return {
      title: content.title,
      description: content.description,
      image: content.image,
    };
  }

  async delete(id) {
    const content = await this.Content.destroy({ where: { id } });
    return {
      title: content.title,
      description: content.description,
    };
  }
};
