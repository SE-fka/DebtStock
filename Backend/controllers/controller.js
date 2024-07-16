
import debtStock from '../models/debtStock.js';
import educationExpenditure from '../models/education.js';


 // GET /api/country-data
 export const getDebtStock = async (req, res) => {
  try {
    const countryData = await debtStock.find({});
    res.status(200).json(countryData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEducationExpenditure = async (req, res) => {
  try {
    const countryData = await educationExpenditure.find({});
    res.status(200).json(countryData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// API endpoint to filter debt stock data by year range
export const filteredDebtByYear = async (req, res) => {
  const { startYear, endYear } = req.params;

  if (!startYear || !endYear) {
    return res.status(400).json({ error: 'startYear and endYear parameters are required' });
  }

  try {
    const filteredData = await debtStock.find({
      data: {
        $elemMatch: {
          year: {
            $gte: parseInt(startYear),
            $lte: parseInt(endYear)
          }
        }
      }
    }, {
      country: 1,
      data: {
        $filter: {
          input: '$data',
          as: 'dataPoint',
          cond: {
            $and: [
              { $gte: ['$$dataPoint.year', parseInt(startYear)] },
              { $lte: ['$$dataPoint.year', parseInt(endYear)] }
            ]
          }
        }
      }
    });

    res.json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the data' });
  }
};

// API endpoint to filter education expenditur data by year range
export const filteredEducationeByYear = async (req, res) => {
  const { startYear, endYear } = req.params;

  if (!startYear || !endYear) {
    return res.status(400).json({ error: 'startYear and endYear parameters are required' });
  }

  try {
    const filteredData = await educationExpenditure.find({
      data: {
        $elemMatch: {
          year: {
            $gte: parseInt(startYear),
            $lte: parseInt(endYear)
          }
        }
      }
    }, {
      country: 1,
      data: {
        $filter: {
          input: '$data',
          as: 'dataPoint',
          cond: {
            $and: [
              { $gte: ['$$dataPoint.year', parseInt(startYear)] },
              { $lte: ['$$dataPoint.year', parseInt(endYear)] }
            ]
          }
        }
      }
    });

    res.json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the data' });
  }
};


// API endpoint for total debt stock from 2012-2022
export const totalDebtStock = async (req, res) => {
  try {
    const data = await debtStock.find({});
    const result = data.map(country => {
      const totalDebtStock = country.data.reduce((total, yearData) => {
        return total + yearData.value;
      }, 0);
      return {
        country: country.country,
        totalDebtStock: totalDebtStock
      };
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/country-data
export const createDebtStock = async (req, res) => {
  try {
    const { country, data } = req.body;
    const newDebtStock = new debtStock({ country, data });
    const savedDebtStock = await newDebtStock.save();
    res.status(201).json(savedDebtStock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createEducationExpenditure = async (req, res) => {
  try {
    const { country, data } = req.body;
    const newEducationExpenditure = new educationExpenditure({ country, data });
    const savedEducationExpenditure = await newEducationExpenditure.save();
    res.status(201).json(savedEducationExpenditure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Update /api/country-data
export const updateDebtStock = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDebtStock = await debtStock.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDebtStock) {
      return res.status(404).json({ message: 'Debt stock not found' });
    }
    res.json(updatedDebtStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete /api/country-data
export const deleteDebtStock = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDebtStock = await debtStock.findByIdAndDelete(id);
    res.json(deletedDebtStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEducationExpenditure = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEducationExpenditure = await educationExpenditure.findByIdAndDelete(id);
    res.json(deletedEducationExpenditure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};