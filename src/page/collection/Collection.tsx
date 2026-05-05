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
import { useNavigate, useLocation } from 'react-router';
import Login from '../../models/loginmodal/loginpopup';

import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchBrowseBooksData } from "../../Features/Collection/CollectionThunk";
import Pagination from '../../component/shared/Pagination';

const C = COLORS.bookCollection;

const getIconForCategory = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('fiction')) return <MdOutlineBook size={18} />;
  if (l.includes('science')) return <FiFeather size={16} />;
  if (l.includes('engineering') || l.includes('tool')) return <FiTool size={16} />;
  if (l.includes('computer') || l.includes('grid')) return <FiGrid size={16} />;
  if (l.includes('kid') || l.includes('user')) return <FiUsers size={16} />;
  if (l.includes('magazine') || l.includes('news')) return <MdOutlineNewspaper size={18} />;
  return <FiBookOpen size={16} />;
};


const PAGE_SIZE = 18;

const Collection = () => {

  const dispatch = useAppDispatch();

  const { books, loading, error, page: currentPage, totalPages, total } = useAppSelector((state) => state.collection);

  const location = useLocation();
  const initialSearch = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('search') || '';
  }, [location.search]);

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    dispatch(fetchBrowseBooksData({ 
      page: 1, 
      limit: PAGE_SIZE,
      search: search || undefined,
      category: selectedCategory || undefined
    }));
  }, [dispatch, search, selectedCategory]);

  const handlePageChange = (newPage: number) => {
    dispatch(fetchBrowseBooksData({ 
      page: newPage, 
      limit: PAGE_SIZE,
      search: search || undefined,
      category: selectedCategory || undefined
    }));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const [hoveredCat, setHovCat] = useState<number | null>(null);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    books.forEach((b: any) => {
      const cat = b.category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return Object.entries(counts).map(([label, count], index) => ({
      id: index + 1,
      label,
      count,
      icon: getIconForCategory(label)
    }));
  }, [books]);

  const filtered = useMemo(() => {
    return books.filter((b: any) => {
      const matchesSearch = 
        b.title?.toLowerCase().includes(search.toLowerCase()) ||
        b.author?.toLowerCase().includes(search.toLowerCase()) ||
        b.category?.toLowerCase().includes(search.toLowerCase()) ||
        b.rackNumber?.toString().toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategory ? b.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [books, search, selectedCategory]);

  const handleSearch = (v: string) => { setSearch(v); };
  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(prev => prev === cat ? null : cat);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: FONT.f1 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .col-cat-grid   {
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

      <div className="w-full py-8 px-4 mb-16 bg-linear-to-r from-[#9A10F9] to-[#E60077] ">
        <div className="px-4 sm:px-6 md:px-16 lg:px-24">
          <h1
            className={` font-bold text-white mb-3 ${FONTSIZE[32]} leading-10`}
          >
            Book Collections
          </h1>
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
            <img src={loginIcon} alt="Login Icon" className="w-8 h-8" />
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
            onClick={() => setShowLogin(true)}
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
          {/* All Categories Option */}
          <div
            onMouseEnter={() => setHovCat(0)}
            onMouseLeave={() => setHovCat(null)}
            onClick={() => setSelectedCategory(null)}
            className="flex items-center justify-between rounded-2xl px-5 py-3 cursor-pointer transition-all duration-200 gap-2 border-2"
            style={{
              background: selectedCategory === null ? 'rgba(154, 16, 249, 0.05)' : C.categoryCard.bg,
              borderColor:
                selectedCategory === null 
                  ? '#9A10F9'
                  : hoveredCat === 0
                    ? C.categoryCard.hoverBorder
                    : C.categoryCard.border,
              boxShadow: selectedCategory === null ? '0 4px 12px rgba(154, 16, 249, 0.1)' : C.categoryCard.shadow,
              transform: selectedCategory === null ? 'translateY(-2px)' : 'none'
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="shrink-0 flex"
                style={{ color: selectedCategory === null ? '#9A10F9' : C.categoryCard.hoverBorder }}
              >
                <FiGrid size={20} />
              </span>
              <span
                className="text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ color: selectedCategory === null ? '#9A10F9' : C.categoryCard.title }}
              >
                All Collections
              </span>
            </div>
            <span
              className="text-sm font-semibold rounded-lg px-2.5 py-1 whitespace-nowrap shrink-0"
              style={{
                background: selectedCategory === null ? '#9A10F9' : C.section.bg,
                color: selectedCategory === null ? '#fff' : C.categoryCard.text,
              }}
            >
              {total} books
            </span>
          </div>

          {categories.map((cat) => (
            <div
              key={cat.id}
              onMouseEnter={() => setHovCat(cat.id)}
              onMouseLeave={() => setHovCat(null)}
              onClick={() => handleCategorySelect(cat.label)}
              className="flex items-center justify-between rounded-2xl px-5 py-3 cursor-pointer transition-all duration-200 gap-2 border-2"
              style={{
                background: selectedCategory === cat.label ? 'rgba(154, 16, 249, 0.05)' : C.categoryCard.bg,
                borderColor:
                  selectedCategory === cat.label 
                    ? '#9A10F9'
                    : hoveredCat === cat.id 
                      ? C.categoryCard.hoverBorder
                      : C.categoryCard.border,
                boxShadow: selectedCategory === cat.label ? '0 4px 12px rgba(154, 16, 249, 0.1)' : C.categoryCard.shadow,
                transform: selectedCategory === cat.label ? 'translateY(-2px)' : 'none'
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="shrink-0 flex"
                  style={{ color: selectedCategory === cat.label ? '#9A10F9' : C.categoryCard.hoverBorder }}
                >
                  {React.cloneElement(cat.icon, { size: 20 })}
                </span>
                <span
                  className="text-base font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ color: selectedCategory === cat.label ? '#9A10F9' : C.categoryCard.title }}
                >
                  {cat.label}
                </span>
              </div>
              <span
                className="text-sm font-semibold rounded-lg px-2.5 py-1 whitespace-nowrap shrink-0"
                style={{
                  background: selectedCategory === cat.label ? '#9A10F9' : C.section.bg,
                  color: selectedCategory === cat.label ? '#fff' : C.categoryCard.text,
                }}
              >
                {cat.count} books
              </span>
            </div>
          ))}
          {categories.length === 0 && !loading && (
            <p className="col-span-full text-center py-4 opacity-70">No categories found.</p>
          )}
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
              onChange={(e) => handleSearch(e.target.value)}
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
          All Books ({total})
        </h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="col-books-grid pb-20">
          {filtered.map((book: any) => (
            <div
              key={book._id || book.bookId}
              className="rounded-2xl px-5 pt-4 pb-5 border"
              style={{
                background:
                  book.available === false
                    ? C.pagination.activeText
                    : C.bookCard.bg,
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
                {(book.title).toUpperCase()}
              </p>
              <p
                className="m-0 mb-3 text-sm leading-snug"
                style={{ color: C.bookCard.author }}
              >
                {(book.author).toUpperCase()}
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
                  {book.rackNumber}
                </span>
                <span
                  className="text-xs font-semibold rounded-lg px-2.5 py-1"
                  style={{
                    background: book.available
                      ? C.status.availableBg
                      : C.status.issuedBg,
                    color: book.available
                      ? C.status.availableText
                      : C.status.issuedText,
                  }}
                >
                  {book.available ? "✓ Available" : "✗ Issued"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalEntries={total}
          limit={PAGE_SIZE}
        />
      </div>

      <Footer />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Collection;