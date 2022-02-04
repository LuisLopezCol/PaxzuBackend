const express = require("express");
const router = express.Router();
const maintenanceController = require("../controllers/CRUDController");

router.post("/", maintenanceController.createMaintenance);
router.get("/", maintenanceController.getMaintenances);
router.get("/:id", maintenanceController.getMaintenance);
router.put("/:id", maintenanceController.updateMaintenance);
router.delete("/:id", maintenanceController.deleteMaintenance);

module.exports = router;
