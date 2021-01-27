from flask import Blueprint, jsonify
from app.models import Pad

pads_routes = Blueprint('pads', __name__)

@pads_routes.route('/')
def pads_list_route():
    pads = Pad.query.all()
    return jsonify([pad.to_dict() for pad in pads])
