import React, { useState } from 'react'
import { FONT, COLORS, FONTSIZE, FONTWEIGHT } from "../../constant/Constant";
import Footer from '../../layout/footer/Footer';
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiBookOpen,
  FiFeather,
  FiTool,
  FiGrid,
  FiUsers,
  FiDisc,
} from 'react-icons/fi';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdOutlineBook, MdOutlineNewspaper } from 'react-icons/md';
import loginIcon from "../../assets/collection/Login icon.png";
import { useNavigate } from 'react-router';

const C = COLORS.bookCollection;

const CATEGORIES = [
  { id: 1, label: 'Fiction',          count: 2, icon: <MdOutlineBook size={18} />    },
  { id: 2, label: 'Non-Fiction',      count: 2, icon: <FiBookOpen size={16} />       },
  { id: 3, label: 'Science',          count: 2, icon: <FiFeather size={16} />        },
  { id: 4, label: 'Engineering',      count: 3, icon: <FiTool size={16} />           },
  { id: 5, label: 'Computer Science', count: 3, icon: <FiGrid size={16} />           },
  { id: 6, label: 'Kids',             count: 2, icon: <FiUsers size={16} />          },
  { id: 7, label: 'Magazines',        count: 2, icon: <MdOutlineNewspaper size={18}/> },
];

const BOOKS = [
  { id: 1,  serial: 'ID : 1',  title: 'Data Structures',                         author: 'Robert Lafore',                             category: 'Computer Science', rack: 'Rack 01', available: true  },
  { id: 2,  serial: 'ID : 2',  title: 'Operating Systems',                       author: 'Abraham Silberschatz',                      category: 'Computer Science', rack: 'Rack 03', available: false },
  { id: 3,  serial: 'ID : 3',  title: 'The Great Gatsby',                        author: 'F. Scott Fitzgerald',                       category: 'Fiction',          rack: 'Rack 03', available: true  },
  { id: 4,  serial: 'ID : 4',  title: 'To Kill a Mockingbird',                   author: 'Harper Lee',                                category: 'Fiction',          rack: 'Rack 01', available: true  },
  { id: 5,  serial: 'ID : 5',  title: 'Introduction to Algorithms',              author: 'Thomas H. Cormen',                          category: 'Computer Science', rack: 'Rack 05', available: true  },
  { id: 6,  serial: 'ID : 6',  title: 'A Brief History of Time',                 author: 'Stephen Hawking',                           category: 'Science',          rack: 'Rack 05', available: true  },
  { id: 7,  serial: 'ID : 7',  title: 'The Origin of Species',                   author: 'Charles Darwin',                            category: 'Science',          rack: 'Rack 05', available: true  },
  { id: 8,  serial: 'ID : 8',  title: 'Mechanical Engineering Handbook',         author: 'Dan B. Marghitu',                           category: 'Computer Science', rack: 'Rack 06', available: true  },
  { id: 9,  serial: 'ID : 9',  title: 'Civil Engineering Materials',             author: 'Peter A. Claisse',                          category: 'Engineering',      rack: 'Rack 09', available: true  },
  { id: 10, serial: 'ID : 10', title: "Harry Potter & Philosopher's Stone",      author: 'J.K. Rowling',                              category: 'Kids',             rack: 'Rack 05', available: true  },
  { id: 11, serial: 'ID : 11', title: 'Charlie and the Chocolate Factory',       author: 'Roald Dahl',                                category: 'Kids',             rack: 'Rack 06', available: true  },
  { id: 12, serial: 'ID : 12', title: 'Sapiens',                                 author: 'Yuval Noah Harari',                         category: 'Non-Fiction',      rack: 'Rack 02', available: true  },
  { id: 13, serial: 'ID : 13', title: 'Educated',                                author: 'Tara Westover',                             category: 'Non-Fiction',      rack: 'Rack 05', available: true  },
  { id: 14, serial: 'ID : 14', title: 'National Geographic Magazine - Jan 2025', author: 'National Geographic',                       category: 'Magazines',        rack: 'Rack 04', available: true  },
  { id: 15, serial: 'ID : 15', title: 'Time Magazine - Jan 2025',                author: 'Time Inc.',                                 category: 'Magazines',        rack: 'Rack 02', available: true  },
  { id: 16, serial: 'ID : 16', title: 'Clean Code',                              author: 'Robert C. Martin',                          category: 'Computer Science', rack: 'Rack 03', available: true  },
  { id: 17, serial: 'ID : 17', title: 'The Pragmatic Programmer',                author: 'Andrew Hunt, David Thomas',                 category: 'Computer Science', rack: 'Rack 03', available: true  },
  { id: 18, serial: 'ID : 18', title: 'Design Patterns',                         author: 'Erich Gamma, Richard Helm, Ralph Johnson',  category: 'Computer Science', rack: 'Rack 04', available: true  },
];

const PAGE_SIZE = 18;

const Collection = () => {
  const [search, setSearch]     = useState('');
  const [currentPage, setPage]  = useState(1);
  const [hoveredCat, setHovCat] = useState<number | null>(null);
  const navigate = useNavigate();

  const filtered = BOOKS.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase()) ||
    b.category.toLowerCase().includes(search.toLowerCase()) ||
    b.rack.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated  = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSearch = (v: string) => { setSearch(v); setPage(1); };

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: FONT.f1, }}
    >

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .col-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 22px;
        }
        .col-books-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 24px;
        }
        @media (max-width: 860px) {
          .col-cat-grid   { grid-template-columns: repeat(2, 1fr); }
          .col-books-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .col-cat-grid   { grid-template-columns: 1fr; }
          .col-books-grid { grid-template-columns: 1fr; }
        }
      `}</style>

              <div
                className="w-full py-8 px-4 mb-16 bg-linear-to-r from-[#9A10F9] to-[#E60077] "
              >
                <div className="px-4 sm:px-6 md:px-16 lg:px-24">
                  <h1 className={` font-bold text-white mb-3 ${FONTSIZE[32]} leading-10`}>Book Collections</h1>
                  <p className="text-white text-lg md:text-lg opacity-90">
                    Explore our extensive collection and request books online
                  </p>
                </div>
              </div>

      <div className="px-4 sm:px-6 md:px-16 lg:px-24 mb-20">

        <div
          className="flex items-center justify-between flex-wrap gap-3 rounded-2xl px-6 py-4 mb-8 border"
          style={{
            background: C.loginAlert.bg,
            borderColor: C.loginAlert.border,
          }}
        >
          <div className="flex items-center gap-4">
            <img src={loginIcon} alt="Login Icon" className='w-8 h-8' />
            <div>
              <p
                className="m-0 font-bold text-lg"
                style={{ color: C.loginAlert.text }}
              >
                Login to request books
              </p>
              <p
                className="mt-1 mb-0 text-sm opacity-70"
                style={{ color: C.loginAlert.text }}
              >
                You need to be logged in to request books online
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="border-none rounded-xl px-7 py-3 text-base font-semibold cursor-pointer whitespace-nowrap shrink-0"
            style={{
              background: C.loginAlert.buttonBg,
              color: C.loginAlert.buttonText,
              fontFamily: FONT.f1,
            }}
          >
            Login Now
          </button>
        </div>

        <h2
          className="text-xl font-bold mt-0 mb-5"
          style={{ color: C.section.title }}
        >
          Browse by Category
        </h2>

        <div className="col-cat-grid">
          {CATEGORIES.map(cat => (
            <div
              key={cat.id}
              onMouseEnter={() => setHovCat(cat.id)}
              onMouseLeave={() => setHovCat(null)}
              className="flex items-center justify-between rounded-2xl px-5 py-3 cursor-pointer transition-colors duration-200 gap-2 border-2"
              style={{
                background: C.categoryCard.bg,
                borderColor: hoveredCat === cat.id ? C.categoryCard.hoverBorder : C.categoryCard.border,
                boxShadow: C.categoryCard.shadow,
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="shrink-0 flex"
                  style={{ color: C.categoryCard.hoverBorder }}
                >
                  {React.cloneElement(cat.icon, { size: 20 })}
                </span>
                <span
                  className="text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ color: C.categoryCard.title }}
                >
                  {cat.label}
                </span>
              </div>
              <span
                className="text-sm font-semibold rounded-lg px-2.5 py-1 whitespace-nowrap shrink-0"
                style={{
                  background: C.section.bg,
                  color: C.categoryCard.text,
                }}
              >
                {cat.count} books
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl px-6 py-4 mb-8 border"
          style={{
            background: C.search.bg,
            borderColor: C.search.border,
          }}
        >
          <p
            className="m-0 mb-3 text-lg font-semibold"
            style={{ color: C.section.title }}
          >
            Search Books
          </p>
          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3 border"
            style={{
              background: C.search.inputBg,
              borderColor: C.search.border,
            }}
          >
            <FiSearch
              size={20}
              style={{ color: C.search.icon, flexShrink: 0 }}
            />
            <input
              value={search}
              onChange={e => handleSearch(e.target.value)}
              placeholder="Search by book name, author, Book ID, or rack number..."
              className="border-none outline-none bg-transparent text-base w-full"
              style={{
                color: C.search.text,
                fontFamily: FONT.f1,
              }}
            />
          </div>
        </div>

        <h2
          className="text-xl font-bold mt-0 mb-5"
          style={{ color: C.section.title }}
        >
          All Books ({filtered.length})
        </h2>

        <div className="col-books-grid pb-20">
          {paginated.map(book => (
            <div
              key={book.id}
              className="rounded-2xl px-5 pt-4 pb-5 border"
              style={{
                background: book.available === false? C.pagination.activeText : C.bookCard.bg,
                borderColor: C.bookCard.border,
                boxShadow: C.bookCard.shadow,
              }}
            >
              <p
                className={`${FONTSIZE[14]} leading-5`}
                style={{ color: C.section.subtitle, ...FONTWEIGHT[700] }}
              >
                {book.serial}
              </p>
              <p
                className="m-0 mb-1 text-base font-bold leading-snug"
                style={{ color: C.bookCard.title }}
              >
                {book.title}
              </p>
              <p
                className="m-0 mb-3 text-sm leading-snug"
                style={{ color: C.bookCard.author }}
              >
                {book.author}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-medium rounded-lg px-2.5 py-1"
                  style={{
                    background: C.bookCard.tagBg,
                    color: C.bookCard.tagText,
                  }}
                >
                  {book.category}
                </span>
                <span
                  className="text-xs font-medium rounded-lg px-2.5 py-1 inline-flex items-center gap-1"
                  style={{
                    background: C.bookCard.tagBg,
                    color: C.bookCard.tagText,
                  }}
                >
                  <FiDisc size={11} />
                  {book.rack}
                </span>
                <span
                  className="text-xs font-semibold rounded-lg px-2.5 py-1"
                  style={{
                    background: book.available ? C.status.availableBg : C.status.issuedBg,
                    color:      book.available ? C.status.availableText : C.status.issuedText,
                  }}
                >
                  {book.available ? '✓ Available' : '✗ Issued'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-xl bg-white border cursor-pointer flex items-center justify-center p-0 disabled:opacity-40"
            style={{ borderColor: C.pagination.border }}
          >
            <FiChevronLeft size={20} style={{ color: C.pagination.text }} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="w-10 h-10 rounded-xl font-semibold text-base cursor-pointer border p-0"
              style={{
                borderColor: p === currentPage ? C.pagination.activeBg : C.pagination.border,
                background:  p === currentPage ? C.pagination.activeBg : '#fff',
                color:       p === currentPage ? C.pagination.activeText : C.pagination.text,
                fontFamily: FONT.f1,
              }}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-xl bg-white border cursor-pointer flex items-center justify-center p-0 disabled:opacity-40"
            style={{ borderColor: C.pagination.border }}
          >
            <FiChevronRight size={20} style={{ color: C.pagination.text }} />
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Collection;