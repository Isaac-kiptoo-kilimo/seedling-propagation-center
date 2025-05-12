import Category from "../models/categories.js";
import Product from '../models/products.js';
// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({
      name,
      description,
      createdBy: req.user._id
    });

    await category.save();
    return res.status(201).json({success: true, message: 'Category created successfully', category });
  } catch (error) {
    return res.status(500).json({success: false, message: error.message });
  }
};

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('createdBy', 'name email');

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: 'No categories found.' });
    }

    const categoryData = await Promise.all(
      categories.map(async (category) => {
        const products = await Product.find({ category: category._id });
        return {
          ...category._doc,
          productCount: products.length,
          products,
        };
      })
    );

    return res.status(200).json({success: true,categories:categoryData});
  } catch (error) {
    return res.status(500).json({success: false, message: error.message });
  }
};

// Get a single category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('createdBy', 'name email');
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    return res.status(200).json({success: true,category});
  } catch (error) {
    return res.status(500).json({success: true, message: error.message });
  }
};

// Update a category
export const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json({ success: true, message: 'Category updated successfully', category });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const associatedProducts = await Product.find({ category: req.params.id });

    if (associatedProducts.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete category. It is associated with one or more products.'
      });
    }

    await Category.findByIdAndDelete(req.params.id);

    return res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

