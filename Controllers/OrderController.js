const orders = require('../Models/Orderscema');

// addorder
const addorder = async (req, res) => {
  try {
    const { Bookname, Price, name, mobileNumber, pincode, address } = req.body;

    // Validate required fields
    if (!Bookname || !Price || !name || !mobileNumber || !pincode || !address) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Add order
    const newOrder = new orders({
      Bookname,
      Price,
      name,
      mobileNumber,
      pincode,
      address,
    });

    await newOrder.save();

    res.status(200).json({ success: true, message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    console.error('Error in addorder:', err);

    res.status(500).json({ success: false, message: 'Error placing order', error: err.message });
  }
};


// get orders
const getallorders = async (req, res) => {
  try {
    const allorders = await orders.find();
    res.status(200).json(allorders);
  } catch (err) {
    console.error('Error fetching all orders:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// // delete order
// exports.deletorder = async (req, res) => {
//     const { userid } = req.body;
//     try {
//       await orders.findByIdAndDelete({ _id: userid });
//       res.status(200).json("Deleted");
//     } catch (err) {
//       res.status(401).json(`Error!!! Transaction failed: ${err}`);
//     }
//   };

module.exports = { addorder, getallorders  };
