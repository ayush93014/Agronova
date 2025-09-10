import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Upload } from "lucide-react";

const SoilSetup = () => {
  const [selectedSoils, setSelectedSoils] = useState<string[]>([]);
  const [farmSize, setFarmSize] = useState("");
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const soilTypes = [
    { id: "clay", name: "Clay", emoji: "🏺", description: "Heavy, retains water" },
    { id: "sandy", name: "Sandy", emoji: "🏖️", description: "Light, drains quickly" },
    { id: "loam", name: "Loam", emoji: "🌱", description: "Ideal mixture" },
    { id: "silt", name: "Silt", emoji: "💧", description: "Smooth, fertile" },
    { id: "peat", name: "Peat", emoji: "🍂", description: "Organic, acidic" },
    { id: "chalky", name: "Chalky", emoji: "⛰️", description: "Alkaline, stony" }
  ];

  const cropOptions = [
    "Rice", "Wheat", "Corn", "Soybeans", "Sugarcane", "Cotton", "Vegetables", "Fruits"
  ];

  const toggleSoilSelection = (soilId: string) => {
    setSelectedSoils(prev => 
      prev.includes(soilId)
        ? prev.filter(id => id !== soilId)
        : [...prev, soilId]
    );
  };

  const toggleCropSelection = (crop: string) => {
    setSelectedCrops(prev => 
      prev.includes(crop)
        ? prev.filter(c => c !== crop)
        : [...prev, crop]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleCompleteSetup = () => {
    // Validate required fields
    if (selectedSoils.length === 0 || !farmSize || selectedCrops.length === 0) {
      alert("Please complete all required fields");
      return;
    }
    
    // Navigate to main dashboard
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-light/20 to-sky-light/20 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <Card className="bg-background/95 backdrop-blur-sm border-earth-medium/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/f2ee9f02-6fb1-4990-82cb-a4be934e38fb.png" 
                alt="AGRONOVA Logo" 
                className="w-16 h-16 rounded-full border-2 border-earth-medium"
              />
            </div>
            <CardTitle className="text-3xl font-bold text-earth-dark">
              Soil Information Setup
            </CardTitle>
            <Alert className="bg-success/10 border-success/20 text-success">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                ✅ Registration successful! Please complete your soil information.
              </AlertDescription>
            </Alert>
          </CardHeader>
        </Card>

        {/* Soil Type Selection */}
        <Card className="bg-background/95 backdrop-blur-sm border-earth-medium/20">
          <CardHeader>
            <CardTitle className="text-xl text-earth-dark">
              Select Your Soil Types (Multiple allowed)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {soilTypes.map((soil) => (
                <div
                  key={soil.id}
                  onClick={() => toggleSoilSelection(soil.id)}
                  className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-200 hover:scale-105 ${
                    selectedSoils.includes(soil.id)
                      ? "border-earth-medium bg-earth-light/20 shadow-md"
                      : "border-earth-light/30 bg-background hover:border-earth-medium/50"
                  }`}
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl">{soil.emoji}</div>
                    <h3 className="font-semibold text-earth-dark">{soil.name}</h3>
                    <p className="text-sm text-earth-medium">{soil.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card className="bg-background/95 backdrop-blur-sm border-earth-medium/20">
          <CardHeader>
            <CardTitle className="text-xl text-earth-dark">
              Upload Soil Document (Optional)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-earth-light rounded-lg p-8 text-center space-y-4">
              <Upload className="h-12 w-12 text-earth-medium mx-auto" />
              <div>
                <p className="text-earth-medium mb-4">
                  Upload Soil Document (PDF, DOC, Image)
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="soil-document"
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('soil-document')?.click()}
                >
                  Choose File
                </Button>
              </div>
              {uploadedFile && (
                <p className="text-success font-medium">
                  📎 {uploadedFile.name}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Farm Size and Crops */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Farm Size */}
          <Card className="bg-background/95 backdrop-blur-sm border-earth-medium/20">
            <CardHeader>
              <CardTitle className="text-xl text-earth-dark">Farm Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (acres) *</Label>
                <Input
                  id="farmSize"
                  type="number"
                  min="0.1"
                  step="0.1"
                  placeholder="Enter farm size"
                  value={farmSize}
                  onChange={(e) => setFarmSize(e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Crop Preferences */}
          <Card className="bg-background/95 backdrop-blur-sm border-earth-medium/20">
            <CardHeader>
              <CardTitle className="text-xl text-earth-dark">
                Preferred Crops *
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {cropOptions.map((crop) => (
                  <button
                    key={crop}
                    type="button"
                    onClick={() => toggleCropSelection(crop)}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      selectedCrops.includes(crop)
                        ? "border-earth-medium bg-earth-light/20 text-earth-dark font-medium"
                        : "border-earth-light/30 text-earth-medium hover:border-earth-medium/50"
                    }`}
                  >
                    {crop}
                  </button>
                ))}
              </div>
              <p className="text-xs text-earth-medium mt-2">
                Select multiple crops you plan to grow
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Complete Setup Button */}
        <div className="flex justify-center">
          <Button 
            onClick={handleCompleteSetup}
            size="lg"
            variant="success"
            className="px-12 py-4 text-lg"
          >
            Complete Setup & Start Farming
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SoilSetup;