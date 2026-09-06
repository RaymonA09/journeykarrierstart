import { useState, useEffect } from "react";
import { Job } from "@/entities/Job";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Building, 
  Euro,
  Search,
  Filter,
  Star,
  ArrowRight,
  Calendar
} from "lucide-react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, searchTerm, jobTypeFilter, locationFilter]);

  const loadJobs = async () => {
    setIsLoading(true);
    try {
      const data = await Job.list("-created_date");
      const activeJobs = data.filter(job => job.active);
      setJobs(activeJobs);
    } catch (error) {
      console.error("Error loading jobs:", error);
    }
    setIsLoading(false);
  };

  const filterJobs = () => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (jobTypeFilter !== "all") {
      filtered = filtered.filter(job => job.job_type === jobTypeFilter);
    }

    if (locationFilter) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  };

  const jobTypeColors = {
    au_pair: "bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20",
    ausbildung: "bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20",
    full_time: "bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20",
    part_time: "bg-stone-100 text-stone-700 border-stone-200",
    fsj_bfd: "bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20",
    internship: "bg-stone-100 text-stone-700 border-stone-200"
  };

  const jobTypeLabels = {
    au_pair: "Au Pair",
    ausbildung: "Ausbildung",
    full_time: "Full Time",
    part_time: "Part Time",
    fsj_bfd: "FSJ/BFD",
    internship: "Internship"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Available Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover exciting career opportunities in Germany. From Au Pair positions to professional jobs and training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ New opportunities daily
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Verified employers
            </Badge>
            <Badge className="bg-[#1C3E1F]/10 text-[#1C3E1F] border-[#1C3E1F]/20">
              ✓ Application support
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="au_pair">Au Pair</SelectItem>
                  <SelectItem value="ausbildung">Ausbildung</SelectItem>
                  <SelectItem value="fsj_bfd">FSJ/BFD</SelectItem>
                  <SelectItem value="full_time">Full Time</SelectItem>
                  <SelectItem value="part_time">Part Time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter className="w-4 h-4" />
                <span>{filteredJobs.length} opportunities found</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Jobs */}
        {!isLoading && filteredJobs.some(job => job.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.filter(job => job.featured).slice(0, 2).map((job) => (
                <Card key={job.id} className="border-2 border-[#1C3E1F]/30 bg-[#1C3E1F]/5 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge className={`${jobTypeColors[job.job_type]} border mb-3`}>
                          <Star className="w-3 h-3 mr-1" />
                          {jobTypeLabels[job.job_type]}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    {job.salary_range && (
                      <div className="flex items-center gap-1 text-[#1C3E1F] font-semibold mb-4">
                        <Euro className="w-4 h-4" />
                        <span>{job.salary_range}</span>
                      </div>
                    )}
                    <Link to={createPageUrl("Contact")} className="block">
                      <Button className="w-full bg-[#1C3E1F] hover:bg-[#2d5a32]">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Jobs */}
        <div className="grid lg:grid-cols-2 gap-6">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))
          ) : filteredJobs.length === 0 ? (
            <div className="lg:col-span-2 text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or check back later for new opportunities.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button>
                  Contact Us for More Opportunities
                </Button>
              </Link>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge className={`${jobTypeColors[job.job_type]} border mb-3`}>
                        {jobTypeLabels[job.job_type]}
                      </Badge>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      {job.application_deadline && (
                        <div className="flex items-center gap-1 text-sm text-orange-600">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {new Date(job.application_deadline).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {job.description}
                  </p>
                  
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                        {job.requirements.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.requirements.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    {job.salary_range && (
                      <div className="flex items-center gap-1 text-[#1C3E1F] font-semibold">
                        <Euro className="w-4 h-4" />
                        <span>{job.salary_range}</span>
                      </div>
                    )}
                    <Link to={createPageUrl("Contact")} className="ml-auto">
                      <Button size="sm" className="bg-[#1C3E1F] hover:bg-[#2d5a32]">
                        Apply
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-6">
            We're constantly adding new opportunities. Contact us to discuss your specific career goals and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-[#1C3E1F] hover:bg-[#2d5a32]">
                Get Personalized Job Matching
              </Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button size="lg" className="border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}