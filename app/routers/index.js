module.exports = (app) => {
    const controllers = require("../controllers");
    let router = require("express").Router();
  
    

    router.post("/order", controllers.order.create);
    router.get("/order", controllers.order.findAll);
    router.get("/order/:id", controllers.order.findOne);
    router.put("/order/:id", controllers.order.update);
    router.delete("/order/:id", controllers.order.delete);

    router.post("/order_detail", controllers.order_detail.create);
    router.get("/order_detail", controllers.order_detail.findAll);
    router.get("/order_detail/:id", controllers.order_detail.findOne);
    router.put("/order_detail/:id", controllers.order_detail.update);
    router.delete("/order_detail/:id", controllers.order_detail.delete);

    router.post("/payment", controllers.payment.create);
    router.get("/payment", controllers.payment.findAll);
    router.get("/payment/:id", controllers.payment.findOne);
    router.put("/payment/:id", controllers.payment.update);
    router.delete("/payment/:id", controllers.payment.delete);

    router.post("/product", controllers.product.create);
    router.get("/product", controllers.product.findAll);
    router.get("/product/:id", controllers.product.findOne);
    router.put("/product/:id", controllers.product.update);
    router.delete("/product/:id", controllers.product.delete);

    router.post("/user", controllers.user.create);
    router.get("/user", controllers.user.findAll);
    router.get("/user/:id", controllers.user.findOne);
    router.put("/user/:id", controllers.user.update);
    router.delete("/user/:id", controllers.user.delete);

    router.get("/produksi", controllers.produksi.getListProduksi);

    router.post("/produksi", controllers.produksi.create);
    router.get("/produksi", controllers.produksi.findAll);
    router.get("/produksi/:id", controllers.produksi.findOne);
    router.put("/produksi/:id", controllers.produksi.update);
    router.delete("/produksi/:id", controllers.produksi.delete);

    app.use("/api", router);
  };
  