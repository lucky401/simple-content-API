const { Router } = require('express');

const { Content } = require('../../models');
const { cdn } = require('../../../config');
const { ContentService } = require('../../services');
const { authenticate } = require('../../../auth/middleware');

const router = Router();

const contentService = new ContentService(Content);

module.exports = (routes) => {
  routes.use('/content', authenticate, router);

  router.get('/', async (req, res, next) => {
    try {
      res.status(200).json({
        status: 'success',
        message: 'Contents',
        data: await contentService.getAll(),
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      res.status(200).json({
        status: 'success',
        message: 'Contents',
        data: await contentService.detail(req.params.id),
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', cdn.upload.single('image'), async (req, res, next) => {
    try {
      res.status(200).json({
        status: 'success',
        message: 'Content Created!',
        data: await contentService.create(req.body, req.file),
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/', cdn.upload.single('image'), async (req, res, next) => {
    try {
      res.status(200).json({
        status: 'success',
        message: 'Content Updated!',
        data: await contentService.update(req.body, req.file),
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/', async (req, res, next) => {
    try {
      res.status(200).json({
        status: 'success',
        message: 'Content Deleted!',
        data: await contentService.delete(req.body.id),
      });
    } catch (err) {
      next(err);
    }
  });
};
