from .db import db

"""
{
    "id": 1,
    "name": "My Rock Cottage",
    "description": "Come play my drum kit at the Rock Cottage",
    "owner": {
        "id": 1,
        "firstName": "Joe"
    },
    "city": "Weehawken",
    "state": "NJ",
    "shared": True,
    "occupancy": 1,
}
"""

class Pad(db.Model):
  __tablename__ = 'pads'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(200), nullable = False)
  shared = db.Column(db.Boolean(), nullable = False)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "shared": self.shared
    }