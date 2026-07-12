
# Flask backend import
from flask import Flask, request, jsonify, send_from_directory

# to connect next js frontend to backend
from flask_cors import CORS

# for saving file 
import os

# Prediction function import
from predict import predict_tumor

# flask application create karna
app = Flask(__name__)

# CORS enable 
CORS(app)


# Upload Folder

# MRI images is saved in this folder
UPLOAD_FOLDER = "uploads"

# if folder not exist automatically created
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Flask configuration
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# Home API
# URL -> http://127.0.0.1:5000/


@app.route("/")
def home():
    return {
        "message": "Brain Tumor Detection API is Running",
        "status": "success"
    }


# View Uploaded MRI Image
# URL -> http://127.0.0.1:5000/uploads/filename


@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(
        app.config["UPLOAD_FOLDER"],
        filename
    )
@app.route("/heatmaps/<filename>")
def heatmap_file(filename):
    return send_from_directory(
        "heatmaps",
        filename
    )
@app.route("/segmentations/<filename>")
def segmentation_file(filename):
    return send_from_directory(
        "segmentations",
        filename
    )


# Upload MRI API
# URL -> http://127.0.0.1:5000/predict


@app.route("/predict", methods=["POST"])
def predict():

    # Check image uploaded or not
    if "image" not in request.files:
        return jsonify({
            "success": False,
            "message": "No image uploaded"
        })

    # image receive 
    image = request.files["image"]

    # Image path
    image_path = os.path.join(
        app.config["UPLOAD_FOLDER"],
        image.filename
    )

    # to save image save 
    image.save(image_path)

   # for Prediction
    result = predict_tumor(image_path)
   
    # Image Url
    result["imageUrl"] = (
    "http://127.0.0.1:5000/uploads/" + image.filename
)
    result["heatmapUrl"] = (
        "http://127.0.0.1:5000/heatmaps/" + image.filename

    )
    result["segmentationUrl"] = (
    "http://127.0.0.1:5000/segmentations/" + image.filename
)
    # result["severity"] = result["severity"]
 
    

     # Response
    return jsonify(result)

    # Server Start

if __name__ == "__main__":
    app.run(debug=True)