const Post = require('../models/Post');

module.exports = {
    async create(req, res) {
        try {
            const { title, content } = req.body;
            if (title, content) {
                const post = await Post.create({
                    title, content
                });
                res.status(201).json(post);
            } else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            res.send(500).json({ msg: 'Falha ao criar publicação' }, error);
        }
    },
    async update(req, res) {
        try {
            const { title, content } = req.body;

            if (title, content) {
                const post = await Post.findOne({ where: { id: req.params.id } });

                if (post) {
                    post.title = title;
                    post.content = content;
                    await post.save();
                    res.status(200).json(post);
                } else {
                    return res.status(404).json({ msg: 'Publicação não encontrada.' });
                }
            } else {
                return res.status(400).json({ msg: 'Preencha os campos corretamente antes de enviar.' });
            }
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao atualizar publicação.' }, error);
        }
    },
    async show(req, res) {
        try {
            const post = await Post.findOne({ where: { id: req.params.id } });

            if (post)
                return res.status(200).json(post);
            else
                return res.status(404).json({ msg: 'Publicação não encontrado.' });

        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar publicação.' }, error);
        }
    },
    async list(req, res) {
        try {
            const post = await Post.findAll();
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ msg: 'Falha ao buscar publicações.' }, error);
        }
    },
    async delete(req, res) {
        try {
            const post = await Post.findOne({ where: { id: req.params.id } });

            if (post) {
                await post.destroy();
                return res.json({ msg: 'Exclusão feita com sucesso!' });
            } else {
                return res.status(404).json({ msg: 'Publicação não encontrado.' });
            }

        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Falha ao excluir publicação.' }, error);
        }
    },


}

