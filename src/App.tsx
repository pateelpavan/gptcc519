import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ChevronRight, Edit3, CheckCircle, Printer, RotateCcw, User, Phone, BookOpen, MapPin, Users } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  branch: string;
  pin: string;
  caste: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    branch: '',
    pin: '',
    caste: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const navigateToPage = async (page: number) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setCurrentPage(page);
    setIsLoading(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // Page 1 - Landing/Home
  const renderPage1 = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 flex flex-col relative"
      style={{
        backgroundImage: `url('https://cache.careers360.mobi/media/colleges/social-media/media-gallery/17918/2019/3/18/Campus%20View%20of%20Government%20Polytechnic%20Chegunta_Campus-View.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center pt-16 pb-12 px-4"
        >
          {/* Logo Circle with pulse animation */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mb-8 shadow-xl"
          >
            <motion.span 
              className="text-white text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZ9MGxOOTIIaSrTdZ7bwoS0W1Z5808q_LWg&s" alt="Logo"></img>
            </motion.span>
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-300"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Title with typewriter effect */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-semibold text-gray-800 px-4 leading-tight max-w-4xl"
          >
            Government Polytechnic College Chegunta 519
          </motion.h1>
        </motion.div>

        {/* College Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex-1 px-6 py-6 flex items-center justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-2xl mx-auto"
          >
            <ImageWithFallback
              src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/17918/2019/3/18/Campus%20View%20of%20Government%20Polytechnic%20Chegunta_Campus-View.jpg"
              alt="Government Polytechnic College Campus"
              className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-2xl ring-1 ring-gray-200"
            />
          </motion.div>
        </motion.div>

        {/* Register Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="p-6 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-md"
          >
            <Button 
              onClick={() => navigateToPage(2)}
              disabled={isLoading}
              className="w-full py-6 text-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <span className="flex items-center justify-center gap-3">
                  Register Now
                  <ChevronRight className="w-6 h-6" />
                </span>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center py-6"
        >
          <p className="text-gray-500">© GPTCC519</p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Page 2 - Registration Form
  const renderPage2 = () => (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 flex flex-col relative"
      style={{
        backgroundImage: `url('https://cache.careers360.mobi/media/colleges/social-media/media-gallery/17918/2019/3/18/Campus%20View%20of%20Government%20Polytechnic%20Chegunta_Campus-View.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center py-8 px-4 border-b border-blue-100 bg-white/80 backdrop-blur-sm"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Government Polytechnic College Chegunta 519</h1>
          <p className="text-blue-600 mt-2 flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Registration Form
          </p>
        </motion.div>

        {/* Form */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl text-gray-800 flex items-center justify-center gap-3">
                  <User className="w-8 h-8 text-blue-600" />
                  Student Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 mb-3">
                      <User className="w-5 h-5" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700 mb-3">
                      <Phone className="w-5 h-5" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Label htmlFor="branch" className="flex items-center gap-2 text-gray-700 mb-3">
                      <BookOpen className="w-5 h-5" />
                      Branch
                    </Label>
                    <Select value={formData.branch} onValueChange={(value: string) => updateFormData('branch', value)}>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                        <SelectValue placeholder="Select your branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EEE">EEE (Electrical & Electronics Engineering)</SelectItem>
                        <SelectItem value="MEC">MEC (Mechanical Engineering)</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Label htmlFor="pin" className="flex items-center gap-2 text-gray-700 mb-3">
                      <MapPin className="w-5 h-5" />
                      PIN Number
                    </Label>
                    <Input
                      id="pin"
                      value={formData.pin}
                      onChange={(e) => updateFormData('pin', e.target.value)}
                      placeholder="Enter PIN number"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Label htmlFor="caste" className="flex items-center gap-2 text-gray-700 mb-3">
                    <Users className="w-5 h-5" />
                    Caste Category
                  </Label>
                  <Select value={formData.caste} onValueChange={(value: string) => updateFormData('caste', value)}>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                      <SelectValue placeholder="Select your caste category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                      <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                      <SelectItem value="BC-A">BC-A (Backward Class A)</SelectItem>
                      <SelectItem value="BC-B">BC-B (Backward Class B)</SelectItem>
                      <SelectItem value="BC-C">BC-C (Backward Class C)</SelectItem>
                      <SelectItem value="BC-D">BC-D (Backward Class D)</SelectItem>
                      <SelectItem value="EBC">EBC (Economically Backward Class)</SelectItem>
                      <SelectItem value="OBC">OBC (Other Backward Class)</SelectItem>
                      <SelectItem value="OC">OC (Open Category)</SelectItem>
                      <SelectItem value="EWS">EWS (Economically Weaker Section)</SelectItem>
                      <SelectItem value="OTHERS">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button 
                    onClick={() => navigateToPage(3)}
                    disabled={!formData.name || !formData.phone || !formData.branch || !formData.pin || !formData.caste || isLoading}
                    className="w-full py-4 text-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        Submit Application
                        <ChevronRight className="w-6 h-6" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center py-6"
        >
          <p className="text-gray-500">© GPTCC519</p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Page 3 - Review/Confirmation
  const renderPage3 = () => (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 flex flex-col relative"
      style={{
        backgroundImage: `url('https://cache.careers360.mobi/media/colleges/social-media/media-gallery/17918/2019/3/18/Campus%20View%20of%20Government%20Polytechnic%20Chegunta_Campus-View.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center py-8 px-4 border-b border-blue-100 bg-white/80 backdrop-blur-sm"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Government Polytechnic College Chegunta 519</h1>
          <p className="text-blue-600 mt-2 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Review Details
          </p>
        </motion.div>

        {/* Review Details */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl text-gray-800 flex items-center justify-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                { [
                  { label: 'Name', value: formData.name, icon: User },
                  { label: 'Phone', value: formData.phone, icon: Phone },
                  { label: 'Branch', value: formData.branch, icon: BookOpen },
                  { label: 'PIN', value: formData.pin, icon: MapPin },
                  { label: 'Caste', value: formData.caste, icon: Users },
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between py-4 px-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-gray-600 flex items-center gap-3 text-lg">
                      <item.icon className="w-6 h-6 text-blue-500" />
                      {item.label}:
                    </span>
                    <span className="font-medium text-gray-800 text-lg">{item.value}</span>
                  </motion.div>
                )) }

                {/* Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="space-y-4 pt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => navigateToPage(2)}
                      variant="outline"
                      disabled={isLoading}
                      className="w-full py-4 text-xl border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <Edit3 className="w-6 h-6" />
                        Edit Details
                      </span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => navigateToPage(4)}
                      disabled={isLoading}
                      className="w-full py-4 text-xl bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <CheckCircle className="w-6 h-6" />
                          Confirm Registration
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center py-6"
        >
          <p className="text-gray-500">© GPTCC519</p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Page 4 - Final/Print
  const renderPage4 = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-green-50/90 via-white/95 to-emerald-50/90 flex flex-col relative"
      style={{
        backgroundImage: `url('https://cache.careers360.mobi/media/colleges/social-media/media-gallery/17918/2019/3/18/Campus%20View%20of%20Government%20Polytechnic%20Chegunta_Campus-View.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white/95 to-emerald-50/90 z-0" />
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center py-8 px-4 border-b border-green-100 bg-white/80 backdrop-blur-sm"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Government Polytechnic College Chegunta 519</h1>
          <p className="text-green-600 mt-2 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Registration Complete
          </p>
        </motion.div>
        {/* Final Details */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <CardTitle className="text-center text-green-600">
                    <div className="mb-6">
                      <motion.div
                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-3xl font-bold"
                      >
                        Registration Successful!
                      </motion.h2>
                    </div>
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <p className="text-gray-600 text-lg">Your registration has been completed successfully</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="space-y-4 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200"
                >
                  {[
                    { label: 'Name', value: formData.name, icon: User },
                    { label: 'Phone', value: formData.phone, icon: Phone },
                    { label: 'Branch', value: formData.branch, icon: BookOpen },
                    { label: 'PIN', value: formData.pin, icon: MapPin },
                    { label: 'Caste', value: formData.caste, icon: Users },
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-gray-600 flex items-center gap-3 text-lg">
                        <item.icon className="w-6 h-6 text-green-500" />
                        {item.label}:
                      </span>
                      <span className="font-medium text-gray-800 text-lg">{item.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="space-y-4 pt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handlePrint}
                      className="w-full py-4 text-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <Printer className="w-6 h-6" />
                        Print Details
                      </span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        navigateToPage(1);
                        setFormData({ name: '', phone: '', branch: '', pin: '', caste: '' });
                      }}
                      variant="outline"
                      className="w-full py-4 text-xl border-2 border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <RotateCcw className="w-5 h-5" />
                        New Registration
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center py-6"
        >
          <p className="text-gray-500">© GPTCC519</p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1: return renderPage1();
      case 2: return renderPage2();
      case 3: return renderPage3();
      case 4: return renderPage4();
      default: return renderPage1();
    }
  };

  return (
    <div className="w-full bg-white min-h-screen relative overflow-hidden">
      {/* Loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Page content with animations */}
      <AnimatePresence mode="wait">
        <motion.div key={currentPage}>
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// vite.config.js
// (Removed from App.tsx - place this in vite.config.js at the project root if needed)