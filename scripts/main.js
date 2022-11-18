// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});

function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function monthDiff(dateFrom, dateTo) {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

const workExperiance = [
  {
    company: "Data Care Corportation",
    designation: "Trainee Engineer",
    from: new Date(2013, 11 - 1, 18),
    to: new Date(2014, 08 - 1, 21),
  },
  {
    company: "CMS It Services PVT LTD",
    designation: "Consultant",
    from: new Date(2016, 08 - 1, 04),
    to: new Date(2017, 05 - 1, 15),
  },
  {
    company: "IMSI India PVT. LTD.",
    designation: "Desktop Support L2",
    from: new Date(2017, 05 - 1, 18),
    to: new Date(2019, 04 - 1, 11),
  },
  {
    company: "Zensar Technologies",
    designation: "Software Engineer",
    from: new Date(2019, 04 - 1, 12),
    to: new Date(2020, 12 - 1, 07),
  },
  {
    company: "Excellarate",
    designation: "Senior Software Engineer",
    from: new Date(2020, 12 - 1 , 07),
    to: new Date(),
  },
];

const experianceInMonths = workExperiance.reduce(
  (a, b) => a + moment(b.to).diff(moment(b.from), "months"),
  0
);

const inYears = (experianceInMonths / 12).toFixed(1);

const anuragDOB = new Date(1993, 06, 18);

document.getElementById("age").textContent = calculate_age(anuragDOB);

document.getElementById("experiance").textContent = `${inYears}+`;
